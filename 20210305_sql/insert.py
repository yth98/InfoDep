import sqlite3

DB_NAME = "example.db"

conn = sqlite3.connect(DB_NAME)
c = conn.cursor()

# insert single row
c.execute("INSERT INTO accounts VALUES (?,?,?)",
          (None, "admin", "admin_password"))

# insert multiple rows
messages = [
    (None, "Alice", "Bob", "Hello"),
    (None, "Admin", "Bob", "You are banned!"),
    (None, "Alice", "Bob", "Ah!"),
]
c.executemany("INSERT INTO messages VALUES (?,?,?,?)", messages)

conn.commit()
conn.close()
