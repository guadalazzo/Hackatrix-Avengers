from django.db import models
from django.utils.translation import ugettext_lazy as _

from model_utils import Choices
from model_utils.models import TimeStampedModel
from django_extensions.db.fields import AutoSlugField


class Property(TimeStampedModel):
    """
    """
    STATUS = Choices(
        (0, 'unlisted', _('unlisted')),
        (1, 'available', _('available')),
        (2, 'occupied', _('occupied')),
    )
    title = models.CharField(_('Title'), max_length=100)
    content = models.TextField(_('Content/body'), max_length=3000)
    image_url = models.URLField(_('Url'), blank=True)
    price = models.DecimalField(_('Price'), max_digits=9, decimal_places=2)
    rooms = models.IntegerField(_('Rooms'), default=1)
    neighborhood = models.CharField(_('Neighborhood'), max_length=100, blank=True)
    rating = models.IntegerField(_('Rating'), null=True, blank=True)
    roomates = models.BooleanField(_('Roomates'), null=True, blank=True)
    guests = models.IntegerField(_('Guests'), null=True, blank=True)
    latitude = models.DecimalField(_('Latitude'), max_digits=9, decimal_places=7, null=True, blank=True)
    longitude = models.DecimalField(_('Longitude'), max_digits=9, decimal_places=7, null=True, blank=True)
    slug = AutoSlugField(populate_from='title')
    status = models.PositiveSmallIntegerField(
        _('status'), blank=True, choices=STATUS, default=STATUS.unlisted)
