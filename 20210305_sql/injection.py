import sqlite3

DB_NAME = "example.db"

conn = sqlite3.connect(DB_NAME)
c = conn.cursor()

username = "' OR 1=1 --"
password = "password"
c.execute("SELECT username, password FROM accounts WHERE username = '%s' AND password = '%s'" % (username, password))
print(c.fetchall())

username = "admin"
password = "admin_password"
c.execute("SELECT username, password FROM accounts WHERE username = ? AND password = ?", (username, password))
for x in c.fetchall():
    if x == (username, password):
        print(x)

conn.commit()
conn.close()
