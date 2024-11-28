from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from blog.models import Post
from blog.serializers import PostSerializer

class PostListView(ListAPIView):
    queryset = Post.objects.order_by('-date_created')
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.order_by('-date_created')
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PostFeaturedView(ListAPIView):
    queryset = BlogPost.objects.all().filter(featured=True)
    serializer_class = PostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class PostCategoryView(APIView):
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = Post.objects.order_by('-date_created').filter(category__iexact=category)

        serializer = PostSerializer(queryset, many=True)

        return Response(serializer.data)