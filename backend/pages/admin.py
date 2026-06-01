from django.contrib import admin

# Register your models here.
from .models import frontpage
@admin.register(frontpage)
class frontpageAdmin(admin.ModelAdmin):
    list_display = ('mainheading', 'created_at')
    search_fields = ('mainheading',)
