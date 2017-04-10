import os
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))

setup(
    name='composer',
    version='0.0.1@2017-04-07.21:58:35.f069e0b001',
    author='Boundless Spatial',
    author_email='geoshape.org@gmail.com',
    url='https://github.com/Mapstory/composer',
    download_url="https://github.com/Mapstory/composer",
    description="Use Mapstory Composer in your django projects.",
    long_description=open(os.path.join(here, 'README.md')).read(),
    license='See LICENSE file.',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    classifiers=['Topic :: Utilities',
                 'Natural Language :: English',
                 'Operating System :: OS Independent',
                 'Intended Audience :: Developers',
                 'Environment :: Web Environment',
                 'Framework :: Django',
                 'Development Status :: 1 - Planning',
                 'Programming Language :: Python :: 2.7'],
)
