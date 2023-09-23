import { make_azure_url } from "~/azure/core"

test('azure make azure url', async () => {
    const res = await fetch(make_azure_url({ "serviceName": "Virtual Machines" }))
    const body = await res.json()
    expect(body.Items.length).toBeGreaterThan(0)
})