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
    slug = AutoSlugField(populate_from='title')
    content = models.TextField(_('Content/body'), max_length=3000)
    status = models.PositiveSmallIntegerField(
        _('status'), blank=True, choices=STATUS, default=STATUS.unlisted)
