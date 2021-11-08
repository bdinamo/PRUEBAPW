from django.shortcuts import render

# Create your views here.pipenv install drf-yasg
from rest_framework import viewsets, generics, response

from api.models import Monitores, Notebook, Procesadores
from api.serializers import MonitoresSerializer, NotebookSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import RegisterSerializer, MeSerializer, ProcesadoresSerializer


class MonitoresViewSet(viewsets.ModelViewSet):
    serializer_class = MonitoresSerializer
    queryset = Monitores.objects.all()



class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer



@api_view(['get'])
@permission_classes([IsAuthenticated])
def me(request):
    print(MeSerializer(request.user).data)
    return Response(MeSerializer(request.user).data)

class NotebookViewSet(viewsets.ModelViewSet):
    serializer_class = NotebookSerializer
    queryset = Notebook.objects.all()

class ProcesadoresViewSet(viewsets.ModelViewSet):
    serializer_class = ProcesadoresSerializer
    queryset = Procesadores.objects.all()