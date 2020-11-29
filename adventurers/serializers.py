from rest_framework import serializers
from .models import Adventurer

class AdventurerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adventurer
        fields = ('pk', 'name', 'char_class', 'char_race', 'atk', 'ac', 'hp', 'mgc')