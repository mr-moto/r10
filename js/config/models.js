import Realm from 'realm';

const Faves = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  },
};

const realm = new Realm({ schema: [Faves] });
console.log('the path is: ', realm.path);

export const queryFaves = () => realm.objects('Fave').map(fave => fave.id);

export const deleteFave = (id) => {
  const fav = realm.objects('Fave').filtered('id ==$0', id);
  try {
    realm.write(() => {
      realm.delete(fav);
    });
  } catch (e) {
    console.log('error deleting fav', e);
  }
};

export const createFave = (session_id) => {
  console.log('asdfjkasfklalkak');
  try {
    realm.write(() => {
      realm.create('Fave', { id: session_id, faved_on: new Date() });
    });
  } catch (e) {
    console.log(e);
  }
};

export default new Realm({ schema: [Faves] });
