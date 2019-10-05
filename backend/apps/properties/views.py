from django.utils.translation import ugettext as _

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import (
    generics, mixins, filters, viewsets, status, permissions, pagination)
from rest_framework.reverse import reverse

from .models import Property
from . import serializers
# from . import filters as myfilters


class PropertyViewSet(mixins.ListModelMixin,
                      mixins.RetrieveModelMixin,
                      viewsets.GenericViewSet):
    model = Property
    queryset = Property.objects.all()
    # permission_classes = (IsAuthenticated,)
    serializer_class = serializers.PropertySerializer
