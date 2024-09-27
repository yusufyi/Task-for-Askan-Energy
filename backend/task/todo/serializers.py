from rest_framework import serializers
from .models import Task, Comment

class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return Task.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.save()
        return instance

class CommentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    task = serializers.PrimaryKeyRelatedField(queryset=Task.objects.all())
    comment_text = serializers.CharField()
    status = serializers.CharField()

    def create(self, validated_data):
        return Comment.objects.create(**validated_data)
   
    def update(self, instance, validated_data):
        instance.task = validated_data.get('task', instance.task)
        instance.comment_text = validated_data.get('comment_text', instance.comment_text)
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance