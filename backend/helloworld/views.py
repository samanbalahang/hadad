from django.shortcuts import render

# Create your views here.
def hello_view(request):
    # داده‌ای که می‌خواهیم به تمپلیت بفرستیم
    context = {
        'message': 'Hello, World! Welcome to my website.'
    }
    # رندر کردن تمپلیت با داده‌ها
    return render(request, 'helloworld/hello.html', context)
