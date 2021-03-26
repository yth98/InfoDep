import sqlite3

DB_NAME = "example.db"

conn = sqlite3.connect(DB_NAME)
c = conn.cursor()

c.execute("SELECT * FROM messages")
print(c.fetchall())

conn.commit()
conn.close()
