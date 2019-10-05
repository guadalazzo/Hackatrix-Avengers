from django.conf.urls import include, url
from django.utils.translation import ugettext_lazy as _

from rest_framework import routers

from .import views

router = routers.DefaultRouter()
router.register(r'properties', views.PropertyViewSet, base_name='properties')


urlpatterns = [
    url(r'^api/', include((router.urls, 'api'), namespace='api')),
]
