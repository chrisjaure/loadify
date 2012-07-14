(function(expect){

	describe('Loadify', function() {

		describe('Script', function() {

			it('should allow bundles to be loaded via AMD', function(done) {

				require(['fixture/script.client.js'], function(script) {
					expect(script).to.exist;
					done();
				});
				
			});

			it('should allow bundles to be loaded via a script tag', function() {

				expect(window.test).to.exist;

			});

			it('should load bundled modules', function() {

				expect(test).to.not.throw(Error);

			});

		});


		describe('Module', function() {

			it('should allow bundles to be loaded via AMD', function(done) {

				require(['fixture/module.client.js'], function(mod) {
					expect(mod).to.exist;
					done();
				});
				
			});

			it('should allow bundles to be loaded via a script tag', function() {

				expect(window.traverse).to.exist;

			});

		});

	});

})(
	typeof chai == 'undefined' ? require('chai').expect : chai.expect
);