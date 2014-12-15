
BROKER_URL = 'redis://localhost:6379/0'
BACKEND_URL = 'redis://localhost'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'msg',
        'USER': 'msg',
        'PASSWORD': 'msg',
        # Empty for localhost through domain sockets or '127.0.0.1' for
        # localhost through TCP.
        'HOST': '',
        'PORT': '',  # Set to empty string for default.
    }
}
