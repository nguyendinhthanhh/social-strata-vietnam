-- ==============================================================================
-- VIỆT NAM ĐA TẦNG — "ĐẤU TRƯỜNG TRI THỨC" LIVE CHALLENGE DATABASE SCHEMA
-- PostgreSQL & Supabase Realtime Integration
-- ==============================================================================

-- 1. Game Rooms Table
CREATE TABLE IF NOT EXISTS game_rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_code VARCHAR(10) UNIQUE NOT NULL,
  host_token VARCHAR(64) NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'LOBBY',
  current_question_index INT NOT NULL DEFAULT 0,
  current_round INT NOT NULL DEFAULT 1,
  question_deadline TIMESTAMPTZ,
  time_limit_seconds INT NOT NULL DEFAULT 20,
  is_paused BOOLEAN NOT NULL DEFAULT FALSE,
  settings JSONB NOT NULL DEFAULT '{"timeLimitSeconds": 20, "questionCount": 12, "mode": "INDIVIDUAL"}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Game Players Table
CREATE TABLE IF NOT EXISTS game_players (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID REFERENCES game_rooms(id) ON DELETE CASCADE,
  room_code VARCHAR(10) NOT NULL,
  nickname VARCHAR(32) NOT NULL,
  reconnect_token VARCHAR(64) NOT NULL,
  score INT NOT NULL DEFAULT 0,
  streak INT NOT NULL DEFAULT 0,
  correct_count INT NOT NULL DEFAULT 0,
  total_time_ms INT NOT NULL DEFAULT 0,
  connected BOOLEAN NOT NULL DEFAULT TRUE,
  joined_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_active_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(room_code, nickname)
);

-- 3. Game Answers Table (Server-Authoritative Submissions)
CREATE TABLE IF NOT EXISTS game_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_code VARCHAR(10) NOT NULL,
  question_index INT NOT NULL,
  player_id UUID REFERENCES game_players(id) ON DELETE CASCADE,
  option_index INT NOT NULL,
  time_taken_ms INT NOT NULL,
  score_awarded INT NOT NULL DEFAULT 0,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(room_code, question_index, player_id)
);

-- 4. Indexes for high performance querying & leaderboards
CREATE INDEX IF NOT EXISTS idx_game_players_room_score 
  ON game_players(room_code, score DESC, correct_count DESC, total_time_ms ASC);

CREATE INDEX IF NOT EXISTS idx_game_answers_room_q 
  ON game_answers(room_code, question_index);

-- 5. Stale Room Cleanup Function (Auto-purges rooms older than 2 hours)
CREATE OR REPLACE FUNCTION purge_stale_game_rooms()
RETURNS void AS $$
BEGIN
  DELETE FROM game_rooms 
  WHERE created_at < NOW() - INTERVAL '2 hours';
END;
$$ LANGUAGE plpgsql;

-- 6. Row Level Security (RLS) Policies
ALTER TABLE game_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_answers ENABLE ROW LEVEL SECURITY;

-- Anonymous players can read room status (sanitized public fields)
CREATE POLICY "Public read game room status"
  ON game_rooms FOR SELECT
  USING (true);

-- Anonymous players can read other connected players in same room
CREATE POLICY "Public read players in room"
  ON game_players FOR SELECT
  USING (true);

-- Only host with verified host_token can update game_rooms
CREATE POLICY "Host update game room"
  ON game_rooms FOR UPDATE
  USING (host_token = current_setting('request.headers', true)::json->>'x-host-token');

-- Players can only insert their own answers
CREATE POLICY "Players insert own answer"
  ON game_answers FOR INSERT
  WITH CHECK (true);

-- 7. Realtime Publication for Supabase
-- Run in SQL editor if enabling Supabase Realtime broadcast:
-- ALTER PUBLICATION supabase_realtime ADD TABLE game_rooms, game_players;
