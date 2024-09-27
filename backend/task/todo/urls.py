

from django.urls import path
from .views import TaskListCreateView, CommentListView, CommentCreateView,CommentDetailView,TaskDetailView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),

    path('comments/', CommentListView.as_view(), name='comment-list'),
    path('comments/create/', CommentCreateView.as_view(), name='comment-create'),
    path('comments/<int:id>/', CommentDetailView.as_view(), name='comment-detail'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  # Token auth endpoint

]