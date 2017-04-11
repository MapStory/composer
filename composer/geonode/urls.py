from django.conf.urls import patterns, url

urlpatterns = patterns('',
                       url(r'^composer/story/new', 'geonode.maps.views.new_map', {'template': 'composer/editor.html'},
                           name='composer-story-new'),
                       url(r'^composer/story/(?P<storyid>\d+)/view', 'geonode.maps.views.map_view',
                           {'template': 'composer/editor.html'}, name='composer-story-view'),)