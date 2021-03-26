import sqlite3
import pandas as pd
from tabulate import tabulate

DB_NAME = "example.db"

db = sqlite3.connect(DB_NAME)
cursor = db.cursor()
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
for table_name in tables:
    table_name = table_name[0]
    if table_name.startswith("sqlite"):
        continue
    table = pd.read_sql_query("SELECT * from %s" % table_name, db)
    header = table.columns.to_list()
    print()
    print(f"Table: {table_name}")
    print()
    print(tabulate(table, header, tablefmt="grid"))
    print()
    print("=" * 40)
cursor.close()
db.close()
