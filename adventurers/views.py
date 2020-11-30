from django.shortcuts import render
from rest_framework.response import response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Adventurer
from .serializers import *

@api_view(['GET', 'POST'])
def adventurers_list(request):
    if request.method == 'GET':
        data = Adventurer.objects.all()

        serializer = AdventurerSerializer(data, context={'request': request}, many=true)

        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = AdventurerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def adventurers_detail(request, pk):
    try:
        adventurer = Adventurer.objects.get(pk=pk)
    except Adventurer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = AdventurerSerializer(adventurer, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        adventurer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)