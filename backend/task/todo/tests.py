from django.test import TestCase

# Create your tests here.
from django.contrib.auth.models import User
from .models import Task, Comment
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status

class TaskModelTest(TestCase):
    def test_create_task(self):
        task = Task.objects.create(title="Test Task")
        self.assertEqual(task.title, "Test Task")
        self.assertIsNotNone(task.id)
        self.assertIsNotNone(task.created_at)

    def test_task_str(self):
        task = Task.objects.create(title="Test Task")
        self.assertEqual(str(task), "Test Task")

class CommentModelTest(TestCase):
    def test_create_comment(self):
        task = Task.objects.create(title="Task for Comment")
        comment = Comment.objects.create(
            task=task,
            comment_text="Test Comment",
            status="pending"
        )
        self.assertEqual(comment.comment_text, "Test Comment")
        self.assertEqual(comment.status, "pending")
        self.assertEqual(comment.task, task)
        self.assertIsNotNone(comment.id)

class TaskListViewTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        Task.objects.create(title="Task 1")
        Task.objects.create(title="Task 2")
        self.url = reverse('task-list-create')  # Ensure this matches your URL name

    def test_get_task_list_unauthenticated(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        data = response.json()
        self.assertEqual(len(data), 2)
        self.assertEqual(data[0]['title'], "Task 1")
        self.assertEqual(data[1]['title'], "Task 2")