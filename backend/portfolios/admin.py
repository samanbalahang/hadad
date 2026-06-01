from django.contrib import admin
from .models import Portfolio
# Register your models here.

# admin.site.register(Portfolio) 
# or: 
@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at')
    search_fields = ('title',)