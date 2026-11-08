import { NextResponse } from "next/server";
import os from "os";

export async function GET() {
  const nets = os.networkInterfaces();
  const ips: Array<{ name: string; address: string }> = [];

  for (const name of Object.keys(nets)) {
    const iface = nets[name];
    if (!iface) continue;
    for (const net of iface) {
      // Filter IPv4 non-internal addresses
      if (net.family === "IPv4" && !net.internal) {
        ips.push({ name, address: net.address });
      }
    }
  }

  // Prefer Wi-Fi or Ethernet
  const primaryIp =
    ips.find((i) => i.name.toLowerCase().includes("wi-fi"))?.address ||
    ips.find((i) => i.name.toLowerCase().includes("ethernet"))?.address ||
    ips[0]?.address ||
    "localhost";

  return NextResponse.json({
    success: true,
    primaryIp,
    interfaces: ips,
  });
}
