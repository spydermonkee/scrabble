describe('letterScorer', function() {
  it('returns a number value for a given letter', function() {
    letterScorer('A').should.equal(1);
  });
  it('returns 1 for given letters: A, E, I, O, U, L, N, R, S, T', function() {
    letterScorer('E').should.equal(1);
  });
  it('returns 2 for given letters: D, G', function() {
    letterScorer('D').should.equal(2);
  });
  it('returns 3 for given letters: B, C, M, P', function(){
    letterScorer('B').should.equal(3);
  });
  it('returns 4 for given letters: F, H, V, W, Y', function() {
    letterScorer('F').should.equal(4);
  });
  it('returns 5 for given letters: K', function() {
    letterScorer('K').should.equal(5);
  });
  it('returns 8 for given letters: J, X', function() {
    letterScorer('J').should.equal(8);
  });
  it('returns 10 for given letters: Q, Z', function() {
    letterScorer('Q').should.equal(10);
  });
});

describe('wordScorer', function(){
  it('returns the total value of a given word', function(){
    wordScorer('A').should.equal(1);
  });
  it('returns the total value of a given word', function(){
    wordScorer('AT').should.equal(2);
  });
  it('returns the total value of a given word, regardless of letter case', function(){
    wordScorer('quEst').should.equal(14);
  });
  it('alerts the user if the input contains anything besides letters', function(){
    wordScorer("don't").should.equal('not a valid scrabble word');
  });
});

