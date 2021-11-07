from django.contrib.auth import get_user_model
from rest_framework import serializers

from api.models import Monitores, Notebook, Procesadores


class MonitoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monitores
        fields = "__all__"


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ['first_name', 'last_name', 'email', 'username', 'password']

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
        )
        return user


class MeSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = "__all__"


class NotebookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notebook
        fields = "__all__"

class ProcesadoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Procesadores
        fields = "__all__"
