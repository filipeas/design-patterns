import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Luis', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });
myDatabaseClassic.show();
