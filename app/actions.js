import U from './utils';

export default function() {

  return {
    make: U.$('#make').map(U.toInputStream('change')).map(s => s.startWith(null)),
    model: U.$('#model').map(U.toInputStream('change')).map(s => s.startWith(null)),
    smth: U.$('#smth').map(U.toInputStream('change')).map(s => s.startWith(null))
  };

}
