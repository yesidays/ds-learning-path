# Ciencia de Datos

### Conceptos

- [¿Qué es la Ciencia de datos?](https://www.youtube.com/watch?v=X3paOmcrTjQ)
- [¿Qué es un Científico de Datos?](https://www.youtube.com/watch?v=xC-c7E5PK0Y)

### Caja de herramientas para el científico de datos

- Lenguaje de programación
    - Python
        - [Learn Python - Full course for beginners (4hrs)](https://www.youtube.com/watch?v=rfscVS0vtbw)
        - [Python Course](https://www.python-course.eu/python3_course.php) (Web)
        - [Google's Python Class](https://developers.google.com/edu/python/)
        - [Python for you and me](https://pymbook.readthedocs.io/en/latest/index.html)
        - [Learnpython.org](https://www.learnpython.org/)
        - [Python on Kaggle](https://www.kaggle.com/learn/python)
- Paquetes fundamentales
    - Pandas
        - [10 minutes to pandas](https://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html)
        - [Learn Pandas](https://www.kaggle.com/learn/pandas)
        - [Exercises](https://www.learnpython.org/es/Pandas%20Basics)
    - Numpy
        - [Numpy for beginners](https://www.youtube.com/watch?v=QUT1VHiLmmI) (Video)
        - [Basics of Numpy](https://www.youtube.com/watch?v=xECXZ3tyONo) (Video)
        - [Exercises](https://www.learnpython.org/en/Numpy_Arrays)
    - SciPy
        - [Conceptos](https://www.guru99.com/scipy-tutorial.html)
- Ambientes recomendados
    - [Jupyter](https://jupyter.org/)
    - [Google Colab](https://colab.research.google.com/)
    - IDE

### Colectar datos

- [Lectura](https://realpython.com/pandas-read-write-files/)
    - CSV
    - Excel
    - JSON
    - Base de datos
    - API

### Preparación y exploración de los datos

- [Selección de datos](https://medium.com/dunder-data/selecting-subsets-of-data-in-pandas-6fcd0170be9c)
- [Subconjuntos](https://pandas.pydata.org/docs/getting_started/intro_tutorials/03_subset_data.html)
- [Ordenamiento](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.sort_values.html)
- [Agrupación](https://realpython.com/pandas-groupby/)
- [Datos faltantes](https://www.geeksforgeeks.org/working-with-missing-data-in-pandas/)
- [Filtrado](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.filter.html)
- [Unión de los datos](https://pandas.pydata.org/pandas-docs/stable/user_guide/merging.html)
- [Reducción de dimensionalidad](https://towardsdatascience.com/dimension-reduction-techniques-with-python-f36ca7009e5c)

    En este punto te aconsejo que primero comprendas el concepto de reducción de la dimensionalidad y después te enfoques al código.

### Modelado

- Cross-validation
    - [Web](https://towardsdatascience.com/train-test-split-and-cross-validation-in-python-80b61beca4b6)
- Regresión
    - [Web](https://realpython.com/linear-regression-in-python/)
- Árboles de decisión
    - [Web](https://towardsdatascience.com/decision-tree-in-python-b433ae57fb93)
- Clustering
    - [Web](https://machinelearningmastery.com/clustering-algorithms-with-python/)

### Evaluación

- Matriz de confusión
    - [Simple guide to confusion matrix terminology](https://www.dataschool.io/simple-guide-to-confusion-matrix-terminology/)
    - [Understanding Confusion Matrix](https://towardsdatascience.com/understanding-confusion-matrix-a9ad42dcfd62)
    - [The confusion matrix (Video)](https://www.youtube.com/watch?v=Kdsp6soqA7o)
- Exactitud (accuracy)
    - [Accuracy, Recall and Precision (Video)](https://www.youtube.com/watch?v=VPZiJGNX4_s)
    - [Metrics to evaluate your machine learning algorithm](https://towardsdatascience.com/metrics-to-evaluate-your-machine-learning-algorithm-f10ba6e38234#:~:text=Classification%20Accuracy,-Classification%20Accuracy%20is&text=It%20is%20the%20ratio%20of,B%20in%20our%20training%20set.)
    - [Google: Classification Accuracy](https://developers.google.com/machine-learning/crash-course/classification/accuracy)
- Recall
    - [Accuracy, Recall and Precision (Video)](https://www.youtube.com/watch?v=VPZiJGNX4_s)
    - [Google: Precision and Recall](https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall)
- Precisión
    - [Accuracy, Recall and Precision (Video)](https://www.youtube.com/watch?v=VPZiJGNX4_s)
    - [Google: Precision and Recall](https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall)
- F1 Score
    - [Introduction to precision, recall and F1](https://www.youtube.com/watch?v=jJ7ff7Gcq34) (Video)
- Curve ROC
    - [ROC curve and AUC](https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc)
- Evaluación para problemas de agrupación (clustering)
    - Similitud de coseno
        - [Cosine Similarity – Understanding the math and how it works (with python codes)](https://www.machinelearningplus.com/nlp/cosine-similarity/)
    - Distancia de Manhattan
        - [Euclidean Distance and Manhattan Distance](https://www.youtube.com/watch?v=p3HbBlcXDTE)
        - [Different Types of Distance Metrics used in Machine Learning](https://medium.com/@kunal_gohrani/different-types-of-distance-metrics-used-in-machine-learning-e9928c5e26c7)
    - Distancia Euclídea
        - [Euclidean Distance and Manhattan Distance](https://www.youtube.com/watch?v=p3HbBlcXDTE)
        - [Different Types of Distance Metrics used in Machine Learning](https://medium.com/@kunal_gohrani/different-types-of-distance-metrics-used-in-machine-learning-e9928c5e26c7)
    - Coeficiente de silueta
        - [Selecting the number of clusters with silhouette analysis on KMeans clustering](https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html)
        - [Silhoutte Score](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.silhouette_score.html)

### Deployment

- [Con Flask](https://www.youtube.com/watch?v=-UYyyeYJAoQ)
- [Microservicio](https://towardsdatascience.com/machine-learning-models-as-micro-services-in-docker-a798e1f068a5)
- Apache Airflow
    - [Tutorial (Playlist)](https://www.youtube.com/watch?v=AHMm1wfGuHE&list=PLYizQ5FvN6pvIOcOd6dFZu3lQqc6zBGp2)

### A/B testing

- [What is A/B Testing? | Data Science in Minutes](https://www.youtube.com/watch?v=zFMgpxG-chM)
- [A/B Test Like a Pro #1: Preparing for A/B Testing](https://www.youtube.com/watch?v=ph-gNsKX2oA)
- [A/B Testing](https://www.youtube.com/watch?v=8H6QmMQWPEI)
- [What is A/B Testing & How to Use It](https://www.youtube.com/watch?v=NCIEe1me9oE)
- [A/B Testing & Statistical Significance - 4 Steps to Know How to Call a Winning Test](https://www.youtube.com/watch?v=c5YaKCMraO8)
- [A/B Testing - You’re doing it wrong](https://medium.com/hackernoon/a-b-testing-youre-doing-it-wrong-77d628ac9518)
- [Beyond A/B Testing: Multi-armed Bandit Experiments](https://towardsdatascience.com/beyond-a-b-testing-multi-armed-bandit-experiments-1493f709f804)

### Servicios en la nube

- AWS Sagemaker
    - [Why do we need AWS Sagemaker?](https://towardsdatascience.com/why-do-we-need-aws-sagemaker-79bce465f19f)
    - [Introduction to AWS SageMaker (Playlist)](https://www.youtube.com/watch?v=8Vj7OaR4DcA)
    - [Amazon documentación oficial](https://aws.amazon.com/es/sagemaker/)
- Azure Machine Learning Studio
    - [Documentación oficial](https://azure.microsoft.com/es-mx/services/machine-learning/)
    - [A simple hands-on tutorial of Azure Machine Learning Studio](https://medium.com/data-science-reporter/a-simple-hands-on-tutorial-of-azure-machine-learning-studio-b6f05595dd73)
    - [Azure ML Studio (Playlist)](https://www.youtube.com/watch?v=uBYu_yrz_ZQ&list=PL8eNk_zTBST_WSR_KUBex8TDnQ21GetSG)
- Cloud AI
    - [Documentación oficial](https://cloud.google.com/products/ai?hl=es)
    - [AI Adventures (Playlist)](https://www.youtube.com/watch?v=HcqpanDadyQ&list=PLIivdWyY5sqJxnwJhe3etaK7utrBiPBQ2)
- IBM Watson
    - [Getting started with watson assistant](https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started)
    - [IBM Watson for beginners tutorials](https://www.youtube.com/watch?v=qcqhHzelIQs&list=PLTgRMOcmRb3MbVexWhbPpFzMiFQVuvVlR) (Playlist)