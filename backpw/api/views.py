from django.shortcuts import render

# Create your views here.pipenv install drf-yasg
from rest_framework import viewsets, generics, response

from api.models import Product
from api.serializers import CourseSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import RegisterSerializer, MeSerializer


class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Product.objects.all()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(['get'])
@permission_classes([IsAuthenticated])
def me(request):
    print(MeSerializer(request.user).data)
    return Response(MeSerializer(request.user).data)
