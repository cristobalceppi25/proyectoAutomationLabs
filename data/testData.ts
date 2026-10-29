

export const userValidData = {
  name: 'Cristóbal',
  lastName: 'Ceppi',
  email: 'test@test.com',
  phone: '1234567890',
  dob: '1995-02-15',
  country: 'Canada',
  password: 'Test1234*',
  confirmPassword: 'Test1234*',
  address: 'Test 1234',
  state: 'Test',
  city: 'Test',
  pin_code: '1234'
}


export const userInvalidData = {
  email: 'test@',
  phone: '1234a56789',
  dob: '2095-12-31',
  password: 'a1234',
  pin_code: 'abcd'
}

export const userLoginValidData = {
  email: 'demo@demo.com',
  password: 'demo'
}

export const userLoginInvalidData = {
  email: 'unTest@gmail.com',
  password: 'test'
}

export const sortProducts = {
  price_asc: 'Price: Low to High',
  price_desc: 'Price: High to Low',
  name_asc: 'Name: A to Z',
  name_des: 'Name: Z to A'
}

export const nombreProductos = {
  polera_negra: 'Black T-Shirt',
  polera_blanca: 'White T-Shirt',
  polera_verde: 'Green Shirt'
}

export const filtros = {
  tipo: {
    Formal: 'Formal',
    Footwear: 'Footwear'
  },
  precio: {
    a: '$0 - $100',
    b: '$101 - $200',
    c: '$201 - $300',
    d: '$301 - $400',
    e: '$401 - $500'
  },
  tamaño: {
    Small: 'Small',
    Medium: 'Medium',
    Large: 'Large',
    Extra_Large: 'Extra Large',
    Double_Extra_Large: 'Double Extra Large'
  },
  color: {
    Black: 'Black',
    White: 'White',
    Red: 'Red',
    Blue: 'Blue',
    Green: 'Green'
  },
  marca: {
    Samsung: 'Samsung',
    LG: 'LG',
    Panasonic: 'Panasonic',
    Toshiba: 'Toshiba',
    Sony: 'Sony'
  }
}
