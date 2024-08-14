import { StateLoader, setupLoader } from './src/loader.js';
import { StatePersistence, setupPersistence } from './src/persistence.js';

const init = async (app_state, db_name, live_keys = []) => {
    setupLoader(app_state);
    setupPersistence(app_state);

    if (db_name) {
        const state_persistence = new StatePersistence(db_name);
        await StateLoader.load(db_name);
        state_persistence.initLiveQuery(live_keys);
    }

    return Promise.resolve();
}

export { StateLoader, StatePersistence, init }
export default { StateLoader, StatePersistence, init }
