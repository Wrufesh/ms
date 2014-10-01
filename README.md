ms
==

django messaging app  
--------------------  
  
  
**Requirements**  

*Django 1.7*  
*python 2.7*  
  
  
*Broker- Redis Server*  
*pip install celery[redis]*  

**Install**  
*Run redis-server*  
Run celery worker by executing the following command  
----------------------------------------------------  
*celery -A msgin worker -l info*  

**msgin** is the name of django app using celery  
run django server

