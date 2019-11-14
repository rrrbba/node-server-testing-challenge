const db = require('../data/dbConfig');

const { insert, remove } = require('./gamesModel');


describe('games model', function() {

    describe('insert()', function() {
        beforeEach(async () => {
            await db('games').truncate();
        })

        it('should insert the game provided', async function() {

            await insert({ name: 'KH1' })

            const games = await db('games')

            expect(games[0].name).toBe('KH1')

            expect(games).toHaveLength(1);
        })
    })

    describe('remove()', function() {

    })

    it('should remove the game provided', async function() {
        let games = await db('games')

        expect(games).toHaveLength(1);

        await remove(1)

         games = await db('games')

        expect(games).toHaveLength(0);
    })
});  