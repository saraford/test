testing stuff and things again

#HI#
```m

set cna = ##class(CNA.CNA).%New("путь к libcna") ; Создаем объект класса CNA.CNA. В аргументах указываем путь к libcna.dll или libcna.so
do  cna.LoadLibrary("путь к libtest")            ; Загружаем библиотеку libtest в CNA

set string = cna.ConvertStringToPointer("Hello") ; Конвертируем нужную строку в массив типа char, и сохраняем указатель на первый
                                                 ; элемент — именно в таком виде хранятся строки в C 

set argTypes = ##class(%ListOfDataTypes).%New()  ; Создаем список, в котором будем передавать список аргументов
do  argTypes.Insert(cna.#POINTER)                ; Вставляем в список параметр класса CNA.CNA, который обозначает тип "указатель"
                                                 ; Аргумент в нашей функции только один, поэтому переходим к ее вызову

set result = cna.CallFunction("cstrlen",         ; Передаем имя вызываемой функции,
                               cna.#UINT,        ; тип возвращаемого значения,
                               argTypes,         ; список типов аргументов функции
                               string)           ; и все аргументы через запятую

w result, !                                      ; Проверяем рузультат (должно получиться 5)
do cna.FreeLibrary()                             ; Освобождаем загруженную библиотеку
```

change
