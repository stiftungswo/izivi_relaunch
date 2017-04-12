<?php
namespace IZiviPlanningBundle\Controller;

use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use FOS\RestBundle\Controller\Annotations;
use FOS\RestBundle\Request\ParamFetcherInterface;
use FOS\RestBundle\View\View;
use Symfony\Component\HttpFoundation\Response;

class TenderController extends BaseController
{
    private $handlerSerivce = 'izivi.tender.handler';

    /**
     * List all Entities.
     *
     * @ApiDoc(
     * resource = true,
     * description="Gets a Collection of Tenders",
     * output = "IZiviPlanningBundle\Entity\Tender",
     * section="tenders",
     * statusCodes = {
     * 200 = "Returned when successful"
     * }
     * )
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true,
     * serializerGroups={"List"}
     * )
     *
     * @Annotations\Route(requirements={"_format"="json"})
     *
     * @param ParamFetcherInterface $paramFetcher
     *            param fetcher codes
     *
     * @return array
     */
    public function getTendersAction(ParamFetcherInterface $paramFetcher)
    {
        return $this->view($this->container->get($this->handlerSerivce)->all($paramFetcher->all()), Response::HTTP_OK);
    }

    /**
     * Get single Entity.
     *
     * @ApiDoc(
     * resource = true,
     * description="Gets the tender with the given id",
     * output = "IZiviPlanningBundle\Entity\Tender",
     * section="tenders",
     * statusCodes = {
     * 200 = "Returned when successful",
     * 404 = "Returned when the page is not found"
     * }
     * )
     *
     * @Annotations\View(
     * serializerEnableMaxDepthChecks=true,
     * serializerGroups={"List"}
     * )
     *
     * @Annotations\Route(requirements={"_format"="json|xml"})
     *
     * @param int $id
     *            id of entry
     *
     * @return array
     */
    public function getTenderAction($id)
    {
        return $this->getOr404($id, $this->handlerSerivce);
    }
}