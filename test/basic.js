const expect = chai.expect;

describe('Basic', () => {
    describe('Get and set', () => {
        it('should set and get numeric values',() => {
            const test_value = 123;

            ApplicationState.set('test_number', test_value);
            const retrieved_value = ApplicationState.get('test_number');

            expect(retrieved_value).to.equal(test_value);
        });

        it('should set and get string values', () => {
            const test_value = 'a string';

            ApplicationState.set('test_string', test_value);
            const retrieved_value = ApplicationState.get('test_string');

            expect(retrieved_value).to.equal(test_value);
        });

        it('should set and get boolean values', () => {
            const test_value_1 = false;
            const test_value_2 = true;

            ApplicationState.set('test_boolean_1', test_value_1);
            ApplicationState.set('test_boolean_2', test_value_2);
            const retrieved_value_1 = ApplicationState.get('test_boolean_1');
            const retrieved_value_2 = ApplicationState.get('test_boolean_2');

            expect(test_value_1).to.equal(retrieved_value_1);
            expect(test_value_2).to.equal(retrieved_value_2);
        });

        it('should set and get null values', () => {
            const test_value = null;

            ApplicationState.set('test_null', test_value);
            const retrieved_value = ApplicationState.get('test_null');
        
            expect(retrieved_value).to.be.null;
        });

        it('should handle undefined values', () => {
            ApplicationState.set('test_undefined', undefined);
            const retrieved_value = ApplicationState.get('test_undefined');

            expect(retrieved_value).to.be.undefined;
        });
    });
});