import { get_aspects } from '~/azure/types'

test('azure get aspects', () => {
	const aspects = get_aspects()
	expect(aspects).toHaveProperty('service')
	expect(
		aspects.service.filter((v) => v.name == 'Virtual Machines')
	).toHaveLength(1)
})
