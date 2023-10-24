import * as SQLite from "expo-sqlite"

export default function useDB() {
  return SQLite.openDatabase("local_saved.sqlite", "1.0.0")
}
