from django.shortcuts import render

# Create your views here.pipenv install drf-yasg
from rest_framework import viewsets, generics, response

from api.models import Products
from api.serializers import ProductsSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import RegisterSerializer, MeSerializer



class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(['get'])
@permission_classes([IsAuthenticated])
def me(request):
    print(MeSerializer(request.user).data)
    return Response(MeSerializer(request.user).data)



class ProductsViewSet(viewsets.ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = Products.objects.all()

    def get_queryset(self):
        queryset = Products.objects.all()
        tipoproducto = self.request.query_params.get('tipoproducto')
        if tipoproducto is not None:
            queryset = queryset.filter(tipoproducto=tipoproducto)
        return queryset







