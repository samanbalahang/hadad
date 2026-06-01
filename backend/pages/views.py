from django.shortcuts import render
from portfolios.models import Portfolio

# Create your views here.
def main_view(request):
    portfolios = Portfolio.objects.all()
    # داده‌ای که می‌خواهیم به تمپلیت بفرستیم
    # context = {
    #     'message': 'Hello, s! Welcome to my website.'
    # }
    # رندر کردن تمپلیت با داده‌ها
    return render(request, 'ui/index.html', {'portfolios': portfolios})
