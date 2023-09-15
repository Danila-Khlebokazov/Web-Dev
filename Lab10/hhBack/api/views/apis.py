import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api.models import Vacancy, Company


# CRUD - CRATE, READ, UPDATE, DELETE
from api.serializers import CompanySerializer, CompanySerializer2, VacancySerializer


@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company = Company.objects.create(name=company_name)
        return JsonResponse(company.to_json())




@csrf_exempt
def company_by_id(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        # desc = data.get('desc', category.desc)
        company.name = new_company_name
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def vacancies_list(request):
    # select * from auth_product;
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = CompanySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vac_comp = Company.objects.get(data.get("company_id", 1))
        vacancy = Company.objects.create(name=vacancy_name, company=vac_comp)
        return JsonResponse(vacancy.to_json())

@csrf_exempt
def vacancy_by_id(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_vac_name = data.get('name', vacancy.name)
        # desc = data.get('desc', category.desc)
        vacancy.name = new_vac_name
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})

@csrf_exempt
def vac_by_company(request, id):
    if request.method == 'GET':
        tmp = []
        for vacancy in Vacancy.objects.values():
            if str(vacancy['company_id']) == str(id):
                tmp.append(vacancy)
        return JsonResponse(tmp, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vac_comp = Company.objects.get(id=data.get("company_id", id))
        vacancy = Vacancy.objects.create(name=vacancy_name, company=vac_comp)
        return JsonResponse(vacancy.to_json(), safe=False)

def vac_top_ten(request):
    vacancies = Vacancy.objects.values()

    vacancies = sorted(vacancies, key= lambda x: x["salary"], reverse=True)
    return JsonResponse(vacancies[:10], safe=False, json_dumps_params={'indent': 2})