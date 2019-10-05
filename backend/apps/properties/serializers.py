from django.utils.text import slugify
from rest_framework.reverse import reverse
from rest_framework import serializers

from .models import Property


class PropertySerializer(serializers.ModelSerializer):

    class Meta:
        model = Property
        fields = (
            'id', 'created', 'title', 'slug', 'content', 'status', 'price', 'rooms', 'neighborhood', 'rating', 'roomates', 'guests'
        )

    # def get_tags(self, obj):
    #     # TODO use real tags :D
    #     tags = [str(career) for career in obj.careers_list[:5]]
    #     return ', '.join(tags)
