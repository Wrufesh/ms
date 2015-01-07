from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from django.contrib import admin
from msgin import views


urlpatterns = patterns('',
                       url(r'^$', 'msgin.views.compose'),
                       url(r'^message/', include('msgin.urls')),
                       url(r'^admin/', include(admin.site.urls)),
                       url(r'^msgs/$', views.MessageList.as_view()),
                       url(r'^msgs/(?P<pk>[0-9]+)/$',
                           views.MessageDetail.as_view()),
                       url(r'^users/$', views.UserList.as_view(),
                           name='user_api'),
                       url(r'^users/(?P<pk>[0-9]+)/$',
                           views.UserDetail.as_view()),
                       url(r'^groups/$', views.GroupList.as_view(),
                           name='groups_api'),
                       url(r'^groups/(?P<pk>[0-9]+)/$',
                           views.GroupDetail.as_view()),
                       url(r'^login/$', views.custom_login, name='login_form'),
                       url(r'^logout/$','django.contrib.auth.views.logout',{'next_page':'/login/'},name='logout'),
                       )
urlpatterns = format_suffix_patterns(urlpatterns)
urlpatterns += patterns('',
                        url(r'^api-auth/',
                            include('rest_framework.urls',
                                    namespace='rest_framework')),
                        )
# urlpatterns += patterns('',
#                         url(r'^static/(?P<path>.*)$',
#                             'django.views.static.serve', {
#                                 'document_root': settings.STATIC_ROOT,
#                             }),)
