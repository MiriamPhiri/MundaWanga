import { openDatabaseSync, SQLiteDatabase } from "expo-sqlite";
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { Asset } from 'expo-asset';

// async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
//   if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
//     await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
//   }
//   const asset = await Asset.fromModule(require(pathToDatabaseFile)).downloadAsync();
//   await FileSystem.copyAsync({
//     from: asset.localUri,
//     to: FileSystem.documentDirectory + 'SQLite/myDatabaseName.db',
//   });
//   return openDatabase('myDatabaseName.db');
// }


export const db = SQLite.openDatabaseAsync("MundaWanga.db");

export function createBudgetTable(db: SQLiteDatabase):Promise<any>{
    return db.runAsync(`
        CREATE TABLE IF NOT EXISTS  budget (id INTEGER PRIMARY KEY NOT NULL , name VARCHAR(20) , set_date INTEGER NOT NULL , end_date INTEGER NOT NULL , limit REAL NOT NULL , used REAL DEFAULT 0 NOT NULL );
        `)
}

// export const db = drizzle(expo);

// export const budgetTable = sqliteTable("budget", {
//     id: int().primaryKey({autoIncrement: true}),
//     name: text(),
//     set_date: integer({mode: 'timestamp'}).default(sql`CURRENT_TIMESTAMP`),
//     end_date: integer({mode: 'timestamp'}),
//     limit: real(),
//     used: real().default(0),
// });