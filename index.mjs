import { createBluetooth } from "node-ble";
const { bluetooth, destroy } = createBluetooth();
const adapter = await bluetooth.defaultAdapter();
if (!(await adapter.isDiscovering()));
await adapter.startDiscovery();

setInterval(async () => {
  const devices = await adapter.devices();
  console.log(devices);
}, 1500);
