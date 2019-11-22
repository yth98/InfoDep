import re
import requests
from bs4 import BeautifulSoup

print("Task 1")
url = 'http://nol.ntu.edu.tw/nol/coursesearch/search_result.php'
res = requests.post(url, params={'current_sem':'108-1', 'cstype':1, \
                                 'page_cnt':70, 'csname':'電子'.encode('big5')})
res.encoding = 'big5'

soup = BeautifulSoup(res.text, 'html.parser')
table = soup.find_all('table', cellpadding=1)[0]

for i in table.find_all('tr')[1:]:
    print(i.find_all('td')[4].text)

print("\r\nTask 2")
url = 'https://web.ee.ntu.edu.tw/teacher_index3.php'
res = requests.get(url)

soup = BeautifulSoup(res.text, 'html.parser')
table = soup.find('div', id='display_type2').find('table')

for i in table.find_all('tr')[1:]:
    eml = i.find('td', width=180).find('img').get('src')
    print(i.find('td', height=50).string, re.search('php\?email=([^&]+)&', eml).group(1))