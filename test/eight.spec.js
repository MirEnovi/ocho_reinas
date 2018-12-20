describe('Ocho Reinas', () => {
  it('debería ser una función', () => {
    assert.equal(typeof compare, 'function');
  });
  it('debería retornar "true" para las cordenadas [[1,1], [2, 5], [3,8 ], [4,6], [5, 3], [6,7], [7, 2], [8, 4]]', () =>{
    assert.equal(
      compare([[1, 1], [2, 5], [3, 8 ], [4, 6], [5, 3], [6, 7], [7, 2], [8, 4]]), 'true'
    );
  });
  it('debería retornar "true" para las cordenadas [[1, 1], [2, 6], [3, 8], [4, 3], [5, 7], [6, 4], [7, 2], [8, 5]]', () =>{
    assert.equal(
      compare([[1, 1], [2, 6], [3, 8], [4, 3], [5, 7], [6, 4], [7, 2], [8, 5]]), 'true'
    );
  });
  it('debería retornar "false" para las cordenadas [[1, 1], [2, 3], [3, 5], [4, 7], [5, 2], [6, 4], [7, 6], [8, 8]]', () =>{
    assert.equal(
      compare([[1, 1], [2, 3], [3, 5], [4, 7], [5, 2], [6, 4], [7, 6], [8, 8]]), 'false'
    );
  });
  it('debería retornar "false" para las cordenadas [[1, 1], [2, 5], [3, 8], [4, 5], [5, 3], [6, 7], [7, 2], [8, 4]]', () =>{
    assert.equal(
      compare([[1, 1], [2, 5], [3, 8], [4, 5], [5, 3], [6, 7], [7, 2], [8, 4]]), 'false'
    );
  });
});