'use strict';

describe('myApp.greet module', function() {

  beforeEach(module('myApp.greet'));

  describe('Greet controller', function(){

    it('should initialize name and message', inject(function($controller) {
        var dummyScope = {};
        $controller('greetController', {$scope : dummyScope});
        expect(dummyScope.name).toBe('');
        expect(dummyScope.message).toBe('');
    }));

    it('should populate message when greeted', inject(function($controller) {
        //Arrange
        var dummyScope = {},
            expectedMessage = 'Hi Magesh, Have a nice day!';

        //Act
        $controller('greetController', {$scope : dummyScope});
        dummyScope.name = 'Magesh';
        dummyScope.greet();

        //Assert
        expect(dummyScope.message).toBe(expectedMessage);
    }));

  });
});
