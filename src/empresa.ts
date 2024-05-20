/*
    Define los atributos para crear un objeto empresa
    Dueño de la clase: Adrián Rubio Alvarado


*/

export class Empresa {
  private _idEmpresa: number;
  private _nombre: string;
  private _area: string;
  private _descripción: string;
  private _opiniones: { valor: number; opinion: string }[];
  private _pago: boolean;
  private _proyectos: {
    nombrePry: string;
    actividades: string;
    perfilRequerido: string;
  }[];
  constructor(
    _idEmpresa: number,
    _nombre: string,
    _area: string,
    _descripción: string,
    _opiniones: { valor: number; opinion: string }[],
    _pago: boolean,
    _proyectos: {
      nombrePry: string;
      actividades: string;
      perfilRequerido: string;
    }[]
  ) {
    this._idEmpresa = _idEmpresa; //int
    this._nombre = _nombre; //String
    this._area = _area; //String
    this._descripción = _descripción; //String
    this._opiniones = _opiniones; //Opinion[]
    this._pago = _pago; //Boolean
    this._proyectos = _proyectos; //Proyecto[]
  }
  get idEmpresa() {
    return this._idEmpresa;
  }
  set idEmpresa(in_idEmpresa) {
    this._idEmpresa = in_idEmpresa;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(in_nombre) {
    this._nombre = in_nombre;
  }
  get area() {
    return this._area;
  }
  set area(in_area) {
    this._area = in_area;
  }

  get descripción() {
    return this._descripción;
  }
  set descripción(in_descripción) {
    this._descripción = in_descripción;
  }

  get opiniones() {
    return this._opiniones;
  }
  set opiniones(in_opiniones) {
    this._opiniones = in_opiniones;
  }

  get proyectos() {
    return this._proyectos;
  }
  set proyectos(in_proyectos) {
    this._proyectos = in_proyectos;
  }
  calificacionTotal() {
    let valorTotal = 0;
    this._opiniones.forEach((item) => {
      valorTotal += item.valor;
    });
    return valorTotal / this._opiniones.length;
  }
}
export function listEmpresas() {
  let empresas = [];
  empresas.push(
    new Empresa(
      1,
      'Azurian',
      'desarrollo',
      'Azurian es una empresa que se encarga de...',
      [
        { valor: 2.5, opinion: 'una empresa interesante' },
        { valor: 5, opinion: 'una excelente empresa' },
        { valor: 4.5, opinion: '¡Gran empresa!' },
        { valor: 3, opinion: 'una muy buena opción!' },
      ],
      true,
      [
        {
          nombrePry: 'CRUD',
          actividades: 'Crear CRUD',
          perfilRequerido: 'Entender de POO',
        },
        {
          nombrePry: 'CRUD',
          actividades: 'Crear CRUD',
          perfilRequerido: 'Entender de POO',
        },
      ]
    )
  );
  empresas.push(
    new Empresa(
      2,
      'Webpoint',
      'desarrollo',
      'Webpoint es una empresa que se encarga de...',
      [
        { valor: 2.5, opinion: 'una empresa interesante' },
        { valor: 5, opinion: 'una excelente empresa' },
        { valor: 4.5, opinion: '¡Gran empresa!' },
        { valor: 3, opinion: 'una muy buena opción!' },
      ],
      false,
      [
        {
          nombrePry: 'Angular',
          actividades: 'Crear CRUD con Angular',
          perfilRequerido: 'Entender de POO y conocer el framework de Angular',
        },
      ]
    )
  );
  empresas.push(
    new Empresa(
      3,
      'BluePixel',
      'desarrollo',
      'BluePixel es una empresa que se encarga de...',
      [
        { valor: 2.5, opinion: 'una empresa interesante' },
        { valor: 5, opinion: 'una excelente empresa' },
        { valor: 4.5, opinion: '¡Gran empresa!' },
        { valor: 3, opinion: 'una muy buena opción!' },
      ],
      true,
      [
        {
          nombrePry: 'SpringBoot',
          actividades: 'Crear CRUD con SpringBoot',
          perfilRequerido: 'Entender de POO y saber SpringBoot',
        },
      ]
    )
  );
  empresas.push(
    new Empresa(
      4,
      'Kokonut Studio',
      'desarrollo',
      'Kokonut Studio es una empresa que se encarga de...',
      [
        { valor: 2.5, opinion: 'una empresa interesante' },
        { valor: 5, opinion: 'una excelente empresa' },
        { valor: 4.5, opinion: '¡Gran empresa!' },
        { valor: 3, opinion: 'una muy buena opción!' },
      ],
      false,
      [
        {
          nombrePry: 'Base de datos',
          actividades: 'Crear CRUD y guardar en base de datos',
          perfilRequerido: 'Entender de POO y base de datos relacionales',
        },
      ]
    )
  );
  empresas.push(
    new Empresa(
      5,
      'Octopus',
      'desarrollo',
      'Octopus es una empresa que se encarga de...',
      [
        { valor: 2.5, opinion: 'una empresa interesante' },
        { valor: 5, opinion: 'una excelente empresa' },
        { valor: 4.5, opinion: '¡Gran empresa!' },
        { valor: 3, opinion: 'una muy buena opción!' },
      ],
      true,
      [
        {
          nombrePry: 'Creación de CRUD',
          actividades: 'Crear CRUD',
          perfilRequerido: 'Entender de POO y base de datos',
        },
      ]
    )
  );
  return empresas;
}
