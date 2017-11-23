import Realm from "realm";

const Fave = {
    name: "Fave",
    primaryKey: "id",
    properties: {
        id: "string",
        faved_on: "date"
    }
};

const realm = new Realm({ schema: [Fave] });

export const queryFave = () => {
    return realm.objects("Fave");
};

export const deleteFave = (faveId) => {
    let fave = realm.objects('Fave').filter("id ==$0", faveId)
    try {
        realm.write(() => {
            realm.delete(fave)
        })
    } catch (e) {
        console.log("error deleting fav", e)
    }
};

export const createFave = session_id => {
    try {
        realm.write(() => {
            realm.create("Fave", { id: session_id, faced_on: new Date() });
        });
    } catch (e) {
        console.log("Error on creation");
    }
};

export default realm;
