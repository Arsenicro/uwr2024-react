export function createConnection(room?: string) {
  return {
    connect() {
      if (room) {
        console.log(`✅ Connecting to ${room}...`);
      } else {
        console.log("✅ Connecting...");
      }
    },
    disconnect() {
      if (room) {
        console.log(`❌ Disconnecting from ${room}...`);
      } else {
        console.log("❌ Disconnecting...");
      }
    },
  };
}
